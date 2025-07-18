"use client";
import { Button } from "@heroui/button";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import ProductForm from "./ProductForm";

const AddProduct = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        color="default"
        variant="solid"
        className="text-white bg-dark "
        endContent={<IoIosAddCircleOutline className="text-xl" />}
      >
        Add New Product
      </Button>

      <Modal isOpen={isOpen} size="xl" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add New Product</ModalHeader>
              <ModalBody>
                  <ProductForm type="add"/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
