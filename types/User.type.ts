declare global {
  namespace Express {
    interface User {
      id: number,
      name: string,
      username: string,
    }
  }
}

export {}
