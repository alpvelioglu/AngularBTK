export class Product
{
    id : number;
    name : string;
    price: number;
    categoryId: number;
    description: string;
    imageUrl: string;
}

/*
Property 'imageUrl' has no initializer and is 
not definitely assigned in the constructor.ts(2564)

tsconfig.json

"compilerOptions": {
    "strictPropertyInitialization": false,
    ...
}

yaptım düzeldi
*/