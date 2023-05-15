import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetch('https://www.terriblytinytales.com/test.txt');
        const text = await response.text();
        const words = text.match(/\b\w+\b/g);
        const frequencies = {};
        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase();
            frequencies[word] = (frequencies[word] || 0) + 1;
        }
        const sortedFrequencies = Object.entries(frequencies)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20)
            .map(([word, frequency]) => ({ word, frequency }));
        setData(sortedFrequencies);
        setIsLoading(false);
    };

    const handleExport = () => {
        const csv = data.map(({ word, frequency }) => `${word},${frequency}`).join('\n');
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
        element.setAttribute('download', 'histogram.csv');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div>
            <button onClick={fetchData} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Submit'}
            </button>
            {data.length > 0 && (
                <>
                    <BarChart width={600} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="word" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="frequency" fill="#8884d8" />
                    </BarChart>
                    <button onClick={handleExport}>Export</button>
                </>
            )}
        </div>
    );
}

export default App;