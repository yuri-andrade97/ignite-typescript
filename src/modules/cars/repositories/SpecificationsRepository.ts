import { Specification } from "../model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository {
    private specifitacions: Specification[];

    constructor() {
        this.specifitacions = [];
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specifitacion = new Specification()

        Object.assign(specifitacion, {
            name,
            description,
            created_at: new Date(),
        })

        this.specifitacions.push(specifitacion);
    }

    findByName(name: string): Specification {
        const specification = this.specifitacions.find(specifitacion => specification.name === name)

        return specification;
    }

}

export { SpecificationsRepository };