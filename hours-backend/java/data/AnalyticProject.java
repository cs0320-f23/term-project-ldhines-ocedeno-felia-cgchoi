package data;

public class AnalyticProject {
    private final Project project;
    private final double averageWaitTime;
    private final double weight;

    public AnalyticProject(double weight,Project project, double averageWaitTime) {
        this.averageWaitTime = averageWaitTime;
        this.weight = weight;
        this.project = project;
    }

    // Getters
    public double getAverageWaitTime() {
        return averageWaitTime;
    }

    public double getWeight() {
        return weight;
    }
}
