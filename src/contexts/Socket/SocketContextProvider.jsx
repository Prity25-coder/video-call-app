import { io } from "socket.io-client";
import SocketContext from "./SocketContext";
import { useContext, useMemo } from "react";
import PropTypes from "prop-types";

export const useSocket = () => {
  return useContext(SocketContext);
};

const baseUrl = import.meta.env.VITE_BASE_URL;

const SocketContextProvider = ({ children }) => {
  const socket = useMemo(() => io(baseUrl), []);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SocketContextProvider;
