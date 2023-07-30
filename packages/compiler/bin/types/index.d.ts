import { MojitoCompilerConfig } from "./conf";
/**
 * 把真实文件系统转换到memfs系统
 * @param vol
 * @param rootPaths
 * @param parent
 */
/**
 * 发布生产包
 * @param config
 * @param callback
 */
export declare function production(config: MojitoCompilerConfig): void;
/**
 * 启动WebpackDevServer
 * @param config
 */
export declare function devServer(config: MojitoCompilerConfig): void;