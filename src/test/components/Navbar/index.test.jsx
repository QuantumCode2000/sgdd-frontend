import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { afterEach, describe, it, expect } from "vitest";

import Navbar from '../../../components/Navbar';

describe('Navbar', () => {
    afterEach(cleanup);
    it('debería renderizar el componente Navbar', () => {
        render(<Navbar />)
    });
    it('deberia renderizar el componente Navbar con el texto "Navbar"', () => {
        render(<Navbar />)
        screen.getByText('Navbar')
    });
    it('deberia renderizarse un tag "nav" jsx', () => {
        render(<Navbar />)
        screen.getByRole('navigation')
    });
    

});