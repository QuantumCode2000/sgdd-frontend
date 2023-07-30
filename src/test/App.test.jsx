import {render, screen, cleanup,fireEvent} from '@testing-library/react';
import {afterEach,describe, it, expect} from "vitest";
import App from  "../App.jsx";
describe('App', () => {
    it('debería renderizar el componente App', () => {
        render(<App/>)
    });
    
});