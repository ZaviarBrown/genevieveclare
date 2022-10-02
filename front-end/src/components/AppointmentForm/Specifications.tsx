import { useState } from 'react';
import './Appointment.css';
import { allServices } from '../utils';

interface SpecificationProps {
    name: string;
}

const selections = () =>
    JSON.parse(localStorage.Services).sort(
        (a: string, b: string) => allServices[b].rate - allServices[a].rate
    );

const options = (choiceArr: any) =>
    choiceArr.map((el: string, i: number) => {
        let obj: {
            [key: string]:
                | string
                | {
                      name: string;
                      select: boolean;
                      time?: number;
                      price?: number | { key: number; value: number }[];
                      requireConsult?: boolean;
                      allow?: boolean;
                      message?: boolean;
                  };
        } = {
            name: allServices[el].name,
        };

        const subSelect = Object.keys(allServices[el]).filter(
            (key) =>
                typeof allServices[el][key] === 'object' &&
                !Array.isArray(allServices[el][key])
        );

        subSelect.forEach((sub: string) => {
            obj[sub] = allServices[el][sub];
        });

        return obj;
    });

const Specifications = (props: SpecificationProps) => {
    const [choices] = useState(selections());
    const [formData, setFormData] = useState(options(choices));
    const [page, setPage] = useState(0);

    console.log();
    return (
        <form className="form7">
            <div>
                Page {page + 1}/{choices.length}
            </div>

            {formData}
        </form>
    );
};

export default Specifications;
