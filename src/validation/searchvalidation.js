import * as Yup from "yup";

export const searchSchema = Yup.object().shape({
  SearchTerm: Yup.string().required(" وارد کردن مقدار جستجوالزامی می باشد")
  .min(2, "  مقدار جستجو نباید کمتر از 2 کاراکتر باشد"),
});
