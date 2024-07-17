declare module "react-cookies" {
  export interface Cookies {
    get(name: string): string;
    getAll(): { [key: string]: string };
    set(name: string, value: string, options?: object): void;
    remove(name: string, options?: object): void;
  }

  const cookies: Cookies;

  export default cookies;
}
