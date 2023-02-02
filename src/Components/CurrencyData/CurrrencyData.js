import React, { useEffect, useState } from 'react';

const CurrrencyData = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState()

    useEffect(() => {
        fetch('https://api.coincap.io/v2/assets')
        .then(res => res.json())
            .then(data => {
                setLoading(data.timestamp)
                setCoins(data.data)
            })
    }, [loading])
    
    
    
    

    return (
            <div className="overflow-x-auto container mx-auto py-16">
            <h2>{ coins.length }</h2>
  <table className="table w-full text-center">
    <thead>
        {/* table header */}
      <tr>
        <th>Rank</th>
        <th>Currency</th>
        <th>Price (USD)</th>
      </tr>
    </thead>

    {/* table body */}
    <tbody>
      {
        coins.map(coin => (
            <tr key={coin.id}>
                <td>{ coin.rank }</td>
                <td>{ coin.name }</td>
                <td>{ parseFloat(coin.priceUsd).toFixed(2) }</td>
            </tr>
        ))
      }
    </tbody>
  </table>
</div>
    );
};

export default CurrrencyData;