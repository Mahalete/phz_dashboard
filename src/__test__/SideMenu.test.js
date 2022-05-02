import React from 'react';
import SideMenu from '../Components/SideMenu';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// describe("Button Component", () => {
//     it("rendered menu", () => {
//         const { getByTestId } = render(<SideMenu />);
//         const menu = getByTestId("menu");
//         expect(menu).toBeTruthy();
//     })
// })

test("There is a menu", () => {
    render(<SideMenu />);
  
    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
    cleanup();
  });
