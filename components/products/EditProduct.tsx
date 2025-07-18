"use client";
import { Product } from "@/types/products.types";
import { DropdownItem } from "@heroui/dropdown";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import ProductForm from "./ProductForm";
import { useState } from "react";

interface EditProductProps {
  product: Product;
}

const EditProduct = ({ product }: EditProductProps) => {
  
  return (
    <>
     
    </>
  );
};

export default EditProduct;
