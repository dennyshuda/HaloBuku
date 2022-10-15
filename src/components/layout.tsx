import { Header } from "./header";
import { Footer } from "./footer";

type Props = {
  children: JSX.Element;
};

export const RootLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
