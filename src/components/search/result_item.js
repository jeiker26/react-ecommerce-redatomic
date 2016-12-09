import React, { Proptypes } from 'react';

const ItemResult = ({ item }) => (
    <tr>
        <td>{ item.name }</td>
        <td>{ item.actor }</td>
        <td className="center">{ item.seasons.join(", ") }</td>
        <td className="center">{ item.alive ? "Si" : "No" }</td>
    </tr>
);

// ItemResult.propTypes = {
//     item: Proptypes.shape({
//         name: Proptypes.string,
//         actor: Proptypes.string,
//         seasons: Proptypes.array,
//         alive: Proptypes.boolean
//     })
// }

export default ItemResult;