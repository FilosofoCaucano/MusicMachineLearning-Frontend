// InstrumentDisplay.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './InstrumentDisplay.css';

const InstrumentDisplay = ({ instrumentData }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (instrumentData?.length && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // 🔄 Destruir gráfico anterior si existe
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // 🎯 Crear nuevo gráfico
            chartInstanceRef.current = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: instrumentData.map(item => item.name),
                    datasets: [{
                        data: instrumentData.map(item => item.percentage),
                        backgroundColor: instrumentData.map(item => item.color),
                        borderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#FFD700',
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    const label = tooltipItem.label || '';
                                    const value = tooltipItem.raw || 0;
                                    return `${label}: ${value.toFixed(2)}%`;
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
            <h2 className="instrument-title">🎶 Instrumentos Identificados</h2>
            {instrumentData?.length ? (
                <canvas
                    ref={chartRef}
                    aria-label="Gráfico de instrumentos identificados"
                    role="img"
                ></canvas>
            ) : (
                <div className="no-instruments">
                    <p>No hay instrumentos identificados hasta ahora.</p>
                    <button className="andean-button" onClick={() => window.location.reload()}>
                        🔄 Volver a intentar
                    </button>
                </div>
            )}
        </div>
    );
};

export default InstrumentDisplay;
