import bunyan from "bunyan";

class PrettyLogStream {
  write(chunk: object) {
    const log = chunk as { msg: string; time: Date; level: number };

    console.log(
      "[%s] %s: %s",
      log.time.toISOString(),
      bunyan.nameFromLevel[log.level],
      log.msg
    );
  }
}

export interface Logger {
  info(obj: Object, ...params: any[]): void
  warn(obj: Object, ...params: any[]): void
  debug(obj: Object, ...params: any[]): void
  error(obj: Object, ...params: any[]): void
  trace(obj: Object, ...params: any[]): void
}

export const logger = bunyan.createLogger({
  name: "ea-coding-test",
  streams: [
    {
      level: "info",
      stream: new PrettyLogStream(),
      type: "raw",
    },
  ],
});