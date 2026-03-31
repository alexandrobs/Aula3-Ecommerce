export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
    public discountPercentage: number,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.price = price
    this.discountPercentage = discountPercentage
  }
  getPrice() {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.price)
  }
}
