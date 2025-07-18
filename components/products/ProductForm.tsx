import { Product } from "@/types/products.types";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { NumberInput } from "@heroui/number-input";
import { Controller, useForm } from "react-hook-form";

interface ProductFormProps {
  type: "add" | "update";
  product?: Product;
}

const ProductForm = ({ type, product = {} as Product }: ProductFormProps) => {
  const { handleSubmit, control } = useForm<Product>({
    defaultValues: {
      ...product,
    } as Product,
  });

  const onSubmit = (data: Product) => {
    // Call your API here
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <section className="grid grid-cols-2 gap-4">
        {/* Title */}
        <Controller
          name="title"
          control={control}
          rules={{ required: "Name is required." }}
          render={({ field, fieldState }) => (
            <Input
              size="sm"
              {...field}
              label="Name"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Slug */}
        <Controller
          name="slug"
          control={control}
          rules={{ required: "Slug is required." }}
          render={({ field, fieldState }) => (
            <Input
              size="sm"
              {...field}
              label="Slug"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Brand */}
        <Controller
          name="brand"
          control={control}
          rules={{ required: "Brand is required." }}
          render={({ field, fieldState }) => (
            <Input
              size="sm"
              {...field}
              label="Brand"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Category */}
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required." }}
          render={({ field, fieldState }) => (
            <Input
              size="sm"
              {...field}
              label="Category"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Price */}
        <Controller
          name="price"
          control={control}
          rules={{
            required: "Price is required.",
            min: { value: 0, message: "Price must be non-negative." },
          }}
          render={({ field, fieldState }) => (
            <NumberInput
              size="sm"
              {...field}
              label="Price"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Rating */}
        <Controller
          name="rating"
          control={control}
          rules={{
            required: "Rating is required.",
            min: { value: 0, message: "Min rating is 0." },
            max: { value: 5, message: "Max rating is 5." },
          }}
          render={({ field, fieldState }) => (
            <NumberInput
              size="sm"
              {...field}
              type="number"
              label="Rating"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Stock */}
        <Controller
          name="stock"
          control={control}
          rules={{
            required: "Stock is required.",
            min: { value: 0, message: "Stock must be non-negative." },
          }}
          render={({ field, fieldState }) => (
            <NumberInput
              size="sm"
              {...field}
              type="number"
              label="Stock"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
            />
          )}
        />

        {/* Links (comma separated) */}
        <Controller
          name="links"
          control={control}
          rules={{ required: "At least one link is required." }}
          render={({ field, fieldState }) => (
            <Input
              size="sm"
              {...field}
              label="Links (comma-separated)"
              placeholder="https://example.com, https://another.com"
              isRequired
              isInvalid={fieldState.invalid}
              errorMessage={fieldState.error?.message}
              validationBehavior="aria"
              onChange={(e) =>
                field.onChange(e.target.value.split(",").map((s) => s.trim()))
              }
              value={field.value?.join(", ") || ""}
            />
          )}
        />
      </section>

      <div className="w-full my-6">
        <Button
          type="submit"
          variant="solid"
          className="w-full text-white bg-dark"
        >
          {type === "add" ? "Add Product" : "Update Product"}
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;
