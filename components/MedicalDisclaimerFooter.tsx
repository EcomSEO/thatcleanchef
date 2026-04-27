/**
 * Medical disclaimer block. Always rendered in the footer; copyable on a
 * recipe page if needed.
 */
export function MedicalDisclaimerFooter() {
  return (
    <div className="mt-8 p-5 rounded-md bg-sage-50 border border-sage-100 text-body-sm text-ink-2 leading-relaxed">
      <strong className="text-sage-700">Editorial &amp; medical note. </strong>
      thatcleanchef provides recipes and educational nutrition information.
      It is not a substitute for medical advice, diagnosis, or treatment.
      Consult a registered dietitian or healthcare provider for personalized
      guidance. Nutrition values are calculated from ingredients and cited
      against the USDA FoodData Central reference where applicable —
      individual ingredient brands and weights may vary.
    </div>
  );
}
