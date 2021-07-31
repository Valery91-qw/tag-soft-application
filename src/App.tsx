import React from 'react';
import './App.css';
import { Stack } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

function App() {

    return (
        <div className="App">
            <Stack horizontal={true} horizontalAlign={"center"}>
                <DefaultButton>Yap</DefaultButton>
                <PrimaryButton>No yap</PrimaryButton>
            </Stack>
            world hello
        </div>
    );
}

export default App;
