public class FinancialForecast {

    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double presentValue = 10000.0;
        double annualGrowthRate = 0.08;
        int years = 5;

        double futureValue = predictFutureValue(presentValue, annualGrowthRate, years);

        System.out.println("Present Value: " + presentValue);
        System.out.println("Growth Rate: " + (annualGrowthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.printf("Predicted Future Value: %.2f%n", futureValue);
    }
}