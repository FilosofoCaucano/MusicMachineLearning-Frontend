import React from 'react';
import { Bar } from 'react-chartjs-2';

const DataVisualization = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [
            {
                label: 'Cantidad de Instrumentos',
                data: data.map(item => item.value),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>Visualización de Datos</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default DataVisualization;

