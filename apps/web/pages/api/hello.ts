// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Get, createHandler } from "@storyofams/next-api-decorators";

class HelloHandler {
  @Get("/")
  hello() {
    return {
      message: "Hello, World!",
    };
  }
}

export default createHandler(HelloHandler);
