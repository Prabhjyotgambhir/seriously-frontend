export class Post {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
    userId?: number;
    image: any;
    imagePath?: string;
    categoryId: number;
    popular: boolean;
}
