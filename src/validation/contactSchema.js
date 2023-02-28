import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  username: Yup.string().required("نام کاربری الزامی می باشد")
  .min(4, "  نام کاربری نباید کمتر از 4 کاراکتر باشد")
  .max(255, "  نام کاربری نباید بیشتر از 255 کاراکتر باشد"),
  password:Yup.string().required("کلمه عبور الزامی  می باشد")
  .min(4, "   کلمه عبور نباید کمتر از 3 کاراکتر باشد")
  .max(255, "   کلمه عبور نباید بیشتر از 255 کاراکتر باشد"),
});
