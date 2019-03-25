export class Util {

  public static encodePassword(password: string) {
    // TODO: confirm about the password encoding with customer, we no need to encode password in the client side: return Encryption.encode(hash.unique(password))
    return password;
  }

  public static generateRandomId(): string {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  public static datatoBase64Data(data: string) {
    return data.split(',')[1];
  }

  public static get isClient(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof localStorage !== 'undefined';
  }

  static isServer() {
    return 'undefined' === typeof window;
  }

  static generateArrayEntity(arr: Array<any>, entityType) {
    if (!arr || !arr[0]) {
      return null;
    }

    const result = [];

    for (const item of arr) {
      const entity = new entityType(item);
      result.push(entity);
    }

    return result;
  }

}
