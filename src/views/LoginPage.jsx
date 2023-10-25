import { useFormik } from "formik";
import React from "react";
import { schema } from "../schema";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // useFormik >> formik özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // formda tutulacak verilerin ilk değerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: async (values, actions) => {
      console.log("values", values);
      // api similasyonu
      await new Promise((resolve) => setTimeout(resolve, 1900));

      // kullacıyı locale gönder
      localStorage.setItem("user", JSON.stringify({ ...values, id: v4() }));
      // ana sayfaya yönlendir
      navigate("/home");
      // formu resetler
      actions.resetForm();
    },
    // doğrulama şeması
    validationSchema: schema,
  });
  console.log(formik.isSubmitting);
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/public/c-logo.png" alt="logo" />
          <h2>Coinmania</h2>
        </div>
        {/* form alanı */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data, key) => (
            <InputField formik={formik} data={data} key={key} />
          ))}
          {/* bunu bu sayfada da tanımlayabilirdim ama ayrı bir komponentte tanımladım
          çünkü daha kullanışlı ama bu sayfada tanımlanabilir */}
          <button type="submit" disabled={formik.isSubmitting}>
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

// inputlar için dizi
const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Yaş",
    name: "age",
    type: "number",
  },
  {
    label: "Şifre",
    name: "password",
    type: "password",
  },
  {
    label: "Şifre Onay",
    name: "confirm_password",
    type: "password",
  },
];

// input alanı bileşeni
const InputField = ({ formik, data }) => {
  const { label, name, type } = data;
  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {/* email ile alakalı hata varsa  */}
      {formik.touched[name] && formik.errors[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};
