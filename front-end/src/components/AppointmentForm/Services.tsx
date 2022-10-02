import { useState, useEffect } from 'react';
import './Appointment.css';
import { allServices, selections, saveLocal, restoreLocal } from '../utils';

interface ServiceProps {
    name: string;
}

const defaultState: any = {
    haircut: false,
    allOverColor: false,
    highlights: false,
    balayage: false,
    vivids: false,
    colorCorrections: false,
    styling: false,
    extensions: false,
    babyLights: false,
    bleachTone: false,
    quiet: false,
};

const options = Object.keys(defaultState);

const Services = (props: ServiceProps) => {
    const [formData, setFormData] = useState(defaultState);
    const [max, setMax]: [string[], any] = useState([]);

    /** //! New implementation
     * Services can be true, false, or null
     * true === 'selected'
     * false === 'notSelected'
     * null === 'cantSelect'
     *
     * ? First function: toggle(e.target)
     * if class === 'cantSelect', return
     *
     * input.val = !input.val
     * if input has disabled,
     * 	if input.val, each disabled.val = null
     * 	else each disabled.val = false
     *
     * if "quiet", setForm && return
     *
     * Find all true in newData
     * if true >= 3 (ignoring "quiet")
     * 	setMax([names of all false])
     * else
     * 	set.includes(newData null), turn to false
     *
     * ? Second function: color()
     * for each formData
     * true = 'selected'
     * false = 'notSelected'
     * null = 'cantSelect'
     *
     * ? Third function: useEffect()
     * Update local storage on formData change
     */

    const toggle = (name: string) => {
        if (formData[name] === null) return false;

        const newData = { ...formData };
        newData[name] = !newData[name];

        if (name === 'quiet') return setFormData(newData);

        const disable = allServices[name].disable;

        if (disable) {
            disable.forEach(
                (el: string) => (newData[el] = newData[name] ? null : false)
            );
        }

        const selected = options.filter((el) => el !== 'quiet' && newData[el]);
        if (selected.length >= 3) {
            const limit: string[] = [];

            options.forEach((el) => {
                if (el !== 'quiet' && newData[el] === false) {
                    limit.push(el);
                    newData[el] = null;
                }
            });

            setMax(limit);
        } else {
            max.forEach((el) => (newData[el] = false));
            setMax([]);
        }

        setFormData(newData);
    };

    const color = () => {
        options.forEach((el) => {
            const service = document.querySelector(`[data-name="${el}"]`);

            if (service)
                switch (formData[el]) {
                    case null:
                        service.className = 'cantSelect';
                        break;

                    case false:
                        service.className = 'notSelected';
                        break;

                    case true:
                        service.className = 'selected';
                        break;

                    default:
                        break;
                }
        });
    };

    useEffect(color, [formData]);

    useEffect(() => restoreLocal(props.name, setFormData), [props.name]);

    useEffect(() => {
        saveLocal(defaultState, formData, props.name);
    }, [formData, props.name]);

    return (
        <div className="services">
            {options.map((type: any) => (
                <div
                    id="option"
                    className="notSelected"
                    key={type}
                    data-name={type}
                    onClick={() => toggle(type)}
                >
                    {allServices[type].name}
                </div>
            ))}
        </div>
    );
};

export default Services;
