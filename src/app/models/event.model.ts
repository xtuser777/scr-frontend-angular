export interface IEvent {
  id: number;
  description: string;
  date: string;
  time: string;
  saleOrder: string;
  freightOrder: string;
  author: string;
}

export class Event implements IEvent {
  private attributes: IEvent;

  constructor(attributes?: IEvent) {
    this.attributes =
      attributes
      ||
      { id: 0, description: '', date: '', time: '', saleOrder: '', freightOrder: '', author: '' };
  }

  get id(): number { return this.attributes.id; }
  set id(v: number) { this.attributes.id = v; }

  get description(): string { return this.attributes.description; }
  set description(v: string) { this.attributes.description = v; }

  get date(): string { return this.attributes.date; }
  set date(v: string) { this.attributes.date = v; }

  get time(): string { return this.attributes.time; }
  set time(v: string) { this.attributes.time = v; }

  get saleOrder(): string { return this.attributes.saleOrder; }
  set saleOrder(v: string) { this.attributes.saleOrder = v; }

  get freightOrder(): string { return this.attributes.freightOrder; }
  set freightOrder(v: string) { this.attributes.freightOrder = v; }

  get author(): string { return this.attributes.author; }
  set author(v: string) { this.attributes.author = v; }

  get toAttributes(): IEvent {
    const attributes: IEvent = { ...this.attributes };
    return attributes;
  }
}
