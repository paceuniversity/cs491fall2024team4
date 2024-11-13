import { testWrite } from '../../utils/dbTest';
import { useState } from 'react';

export const TestForm = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await testWrite(data);
    };

    const data = {
        email: email,
        password: password,
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id='' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input id='' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};