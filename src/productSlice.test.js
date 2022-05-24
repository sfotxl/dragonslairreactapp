import * as productSlice from "./shared/productSlice"

// Test for selectProductsByType returns an array containing all cheese products
test(
    "selects all cheese objects",
    () => {
        const cheese = productSlice.selectProductsByType("cheese");
        expect(cheese.length).toBe(4);
    },
    () => {
        console.log("selects all cheese objects");
    }
)

// Test that selectSeasonalProducts returns an array containing objects with seasonal: true
test(
    "selects seasonal products",
    () => {
        const seasonal = productSlice.selectSeasonalProducts();
        expect(seasonal.length).toBe(1);
    }
)

// Test that selectTopProducts returns an array containing objects with type: "top"
test(
    "selects top products",
    () => {
        const top = productSlice.selectTopProducts();
        expect(top.length).toBe(3);
    }
)
