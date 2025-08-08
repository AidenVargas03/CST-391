export interface Part {
  id?: number;
  pcId: number;  // Matches Angular naming
  name: string;
  type: string;
  price: number;
  quantity: number;
}
