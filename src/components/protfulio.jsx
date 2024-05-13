
import { useEffect, useState } from "react";
import ProtfulioCard from "./protfulioCard";
const protfulio = () => {
    const [loaddata, setLoaddata] = useState([]);
    useEffect(() => {
      fetch('/fakedata.json')
        .then(res => res.json())
        .then(data => setLoaddata(data))
    })
    return (
        <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
                {loaddata.map((data, index) => (
                    <ProtfulioCard key={index} data={data}></ProtfulioCard>
                ))}
            </div>
        </div>
    );
};

export default protfulio;