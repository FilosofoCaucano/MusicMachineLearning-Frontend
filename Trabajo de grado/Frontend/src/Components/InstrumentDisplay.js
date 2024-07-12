// InstrumentDisplay.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './InstrumentDisplay.css';

const InstrumentDisplay = ({ instrumentData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (instrumentData && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: instrumentData.map(item => item.name),
                    datasets: [{
                        data: instrumentData.map(item => item.percentage),
                        backgroundColor: instrumentData.map(item => item.color),
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#FFD700'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                                }
                            }
                        }
                    }
                }
            });
        }
    }, [instrumentData]);

    return (
        <div className="instrument-display">
            <h2>Instrumentos Identificados</h2>
            {instrumentData.length ? (
                <canvas ref={chartRef}></canvas>
            ) : (
                <div className="no-instruments">
                    <p>No hay instrumentos identificados hasta ahora.</p>
                    <button className="andean-button">Actualizar</button>
                </div>
            )}
        </div>
    );
};

export default InstrumentDisplay;



