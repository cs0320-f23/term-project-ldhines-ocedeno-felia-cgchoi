package data;

public class Analytics implements AnalyticsDatasource {

    private int[][] data;

    public Analytics() {
        this.data = new int[][]{
                {17, 42, 89, 23, 55},
                {10, 37, 61, 98, 5},
                {73, 28, 49, 82, 14},
                {34, 67, 91, 11, 76},
                {19, 84, 3, 46, 70}
        };
    }

    @Override
    public int[][] getData() {
        return this.data;
    }
}
