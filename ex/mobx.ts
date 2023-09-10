import { useState } from "react";

export function useModel<T>(ModelClass: new () => T): T {
  return useState(() => new ModelClass())[0];
}
