import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in the props", () => {
        const component = create(<ProfileStatus status="MY FIRST REACT APP" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("MY FIRST REACT APP");
    });

    test("after creation span should be displayed ", () => {
        const component = create(<ProfileStatus status="MY FIRST REACT APP" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children.length).toBe(1);
    });

    test("after creation span should be with correct status", () => {
        const component = create(<ProfileStatus status="MY FIRST REACT APP" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("MY FIRST REACT APP");
    });

    test("after creation input shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="MY FIRST REACT APP" />);
       
        expect(() => { component.root.findByType('input'); }).toThrow();
    });

    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="MY FIRST REACT APP" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("MY FIRST REACT APP");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="MY FIRST REACT APP" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});