import { z } from "zod";
import { ContactSchema } from "../components/AddContactForm/ContactSchema";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { DeepPartial, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type ContactParameter = z.infer<typeof ContactSchema>;
export type UpdateContactParameter = DeepPartial<ContactParameter>;

export interface Contacts {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

interface ContactsProviderValues {
  contacts: Contacts[];
  filteredContacts: Contacts[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  registerContact: SubmitHandler<ContactParameter>;
  updateContact: SubmitHandler<UpdateContactParameter>;
  deleteContact: (formData: ContactParameter) => Promise<void>;
  contact: Contacts;
  firstLetter: string;
  getContact: (id: string) => Promise<void>;
  setFilteredContacts: React.Dispatch<React.SetStateAction<Contacts[]>>;
  setLoadContacts: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContactsProviderProps {
  children: React.ReactNode;
}

export const ContactsContext = createContext({} as ContactsProviderValues);

export const ContactsProvider = ({ children }: ContactsProviderProps) => {
  const navigate = useNavigate()
  const { token } = useContext(UserContext);
  const [contacts, setContacts] = useState([] as Contacts[]);
  const [filteredContacts, setFilteredContacts] = useState([] as Contacts[]);
  const [openModal, setOpenModal] = useState(false);
  const [loadContacts, setLoadContacts] = useState(true);
  const [contact, setContact] = useState({} as Contacts);
  const [firstLetter, setFirsLetter] = useState("");

  const getContacts = async () => {
    const responseContacts = await api.get("contacts/", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    setContacts(responseContacts.data);
    setFilteredContacts(responseContacts.data);

    setLoadContacts(false);
  };

  const getContact = async (id: string) => {
    const responseContact = await api.get(`contacts/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    setContact(responseContact.data);
    setFirsLetter(responseContact.data.fullName.slice(0, 1));
  };

  const registerContact = async (formRegisterData: ContactParameter) => {
    try {
      await api.post("contacts/", formRegisterData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Registro realizado com sucesso!");

      setOpenModal(false);
      setLoadContacts(true);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const updateContact = async (formUpdateData: UpdateContactParameter) => {
    await api.patch(`/contacts/${formUpdateData.id}`, formUpdateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setOpenModal(false);
  };

  if (loadContacts) {
    getContacts();
  }

  const deleteContact = async (formData: ContactParameter) => {
    await api.delete(`contacts/${formData.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setOpenModal(false)
    setLoadContacts(true);
    navigate("/dashboard")
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filteredContacts,
        openModal,
        setOpenModal,
        registerContact,
        contact,
        firstLetter,
        getContact,
        updateContact,
        deleteContact,
        setFilteredContacts,
        setLoadContacts
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
