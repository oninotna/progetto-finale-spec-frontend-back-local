export type Bikes = {
    title: string,
    category: 'mtb' | 'bdc' | 'gravel' | 'e-mtb',
    brand: string,
    model: string,
    description: string,
    available_sizes: string[],
    frame_material: 'carbon' | 'aluminum',
    wheels_material: 'carbon' | 'aluminum',
    trasmission: string,
    brake: string,
    suspensions: 'without suspensions' | 'front suspensions' | 'full suspensions',
    weigth: number,
    price: number,
    image?: string
};