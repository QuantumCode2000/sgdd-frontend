import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { afterEach, describe, it, expect } from "vitest";

import Navbar from '../../../components/Navbar';

describe('Navbar', () => {
    afterEach(cleanup);
    it('debería renderizar el componente Navbar', () => {
        render(<Navbar />)
    });
    // it('deberia renderizar el componente Navbar con el texto "Navbar"', () => {
    //     render(<Navbar />)
    //     screen.getByText('Navbar')
    // });
    it('deberia renderizarse un tag "nav" jsx', () => {
        render(<Navbar />)
        screen.getByRole('navigation')
    });
    // deberia renderizar una imagen
    it('deberia renderizarse una imagen', () => {
        render(<Navbar />)
        screen.getByAltText('imagen')
    });
    // deberia renderizar un tag "figure"
    it('deberia renderizarse un tag "figure"', () => {
        render(<Navbar />)
        screen.getByRole('figure')
    });
    // deberia renderizar un tag "img"
    it('deberia renderizarse un tag "img"', () => {
        render(<Navbar />)
        screen.getByRole('img')
    });
    // deberia renderizar un tag "img" con la clase "logo-ejercito"

    
});