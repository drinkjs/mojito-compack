import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { nanoid } from "nanoid";

type AppActionRef =  React.MutableRefObject<{updateProps: (props: Record<string, any>) => void} | undefined>

export interface MojitoComponentProps {
  __display: "editor" | "viewer";
  __style?: Record<string, any>;
  __UpdateProps?: (props:Record<string, any>)=>void
}

export type ComponentPropsExplain = {
  name: string;
  type: "string" | "number" | "boolean" | "object" | "array";
  description?: string;
  default?: any;
};

export type ComponentInfo = {
  name: string;
  cover?: string;
  version?: string;
  props?: Record<string, ComponentPropsExplain>;
  events?: Record<
    string,
    {
      name?: string;
      description?: string;
    }
  >;
};

export interface MojitoComponent<T> {
  framework?: {
    name: string;
    version: string;
  };
  mount(container: Element | DocumentFragment, props?: any): void;
  unmount(): void;
  setProps(newProps: any): void;
  getProps(): Record<string, any> | undefined;
  getDefaultProps(): Record<string, any> | undefined;
  readonly component: T;
  readonly componentInfo: ComponentInfo;
  readonly componentId: string;
}

const App: React.FC<{
	component: any;
	props?: any;
	onMount?: (props?: Record<string, any>) => void;
	appRef?: AppActionRef;
}> = ({ component: Comp, props, appRef, onMount }) => {
	const [currProps, setCurrProps] = useState(props);

	useImperativeHandle(
		appRef,
		() => ({
			updateProps:(props:Record<string, any>)=>{
				setCurrProps(props)
			}
		}),
		[currProps]
	);

	useEffect(() => {
		if (onMount) {
			onMount(props);
		}
	}, []);

	return <Comp {...currProps} />;
};

export function CreatePack<T extends object>(
	component: T,
	componentInfo: ComponentInfo
) {
	const componentId = nanoid();
	return class MojitoPack implements MojitoComponent<T> {
		__component: T = component;
		__info = componentInfo;
		__root: null | ReactDOM.Root = null;
		// __eventer: null | EventTarget = null;
		__props?: Record<string, any> = undefined;
		__id = componentId;
		__ref: AppActionRef = {current:undefined}
		framework = {
			name: "react",
			version: React.version,
		};

		get component() {
			return this.__component;
		}

		get componentInfo() {
			return this.__info;
		}

		get componentId() {
			return this.__id;
		}

		mount(
			container: Element | DocumentFragment,
			props?: Record<string, any>,
			onMount?: (props?: Record<string, any>) => void
		) {
			const client = ReactDOM.createRoot(container);
			this.__root = client;
			this.__props = { ...this.getDefaultProps(), ...props };
			client.render(
				<App
					component={this.__component}
					props={this.__props}
					onMount={onMount}
					appRef={this.__ref}
				/>
			);
		}

		unmount() {
			if (this.__root) {
				this.__root.unmount();
				this.__root = null;
				this.__ref.current = undefined;
			}
		}

		setProps(newProps: Record<string, any>) {
			if (this.__ref.current) {
				const oldProps = this.__props;
				this.__props = { ...oldProps, ...newProps };
				this.__ref.current.updateProps(this.__props)
			}
		}

		getProps() {
			return this.__props;
		}

		getDefaultProps() {
			let defaultProps: any;
			if (this.componentInfo.props) {
				for (const key in this.componentInfo.props) {
					if (this.componentInfo.props[key].default) {
						if (!defaultProps) {
							defaultProps = {};
						}
						defaultProps[key] = this.componentInfo.props[key].default;
					}
				}
			}
			return defaultProps;
		}
	};
}