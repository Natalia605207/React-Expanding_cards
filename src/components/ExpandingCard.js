import { useState } from 'react';
import { dataCards } from './dataCards';
import { FaCamera } from "react-icons/fa";

export const ExpandingCard = () => {
    const [active, setActive] = useState(0);

    const handleToggle = (index) => setActive(index);

    return (
    <main>
        {dataCards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
            <section
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
            >
            <img src={card.image} alt="wonder" />
            <div className="content">
                <span className="icon"><FaCamera /></span>
                <div>
                <h2>{card.name}</h2>
                <p>{card.country}</p>
            </div>
            </div>
            </section>
        );
    })}
</main>
);
}

