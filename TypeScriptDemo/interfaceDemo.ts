interface IProduct
{
    id: number;
    name: string;
    unitPrice: number;
}

function Save(product: IProduct)
{
    console.log(product.name + " kaydedildi");
}

Save({id:1, name: "Laptop", unitPrice:10000});

interface IPersonService
{
    save();
}

class CustomerService implements IPersonService {
    save() {
        throw new Error("Method not implemented.");
    }
    
}