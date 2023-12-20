package javaTest;

import data.AnalyticProject;
import data.Analytics;
import data.Project;
import data.ProjectFeatures;
import org.junit.Assert;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.ArrayList;
import java.util.List;

public class AnalyticsTest {

    private Analytics analytics;

    @Test
    public void testProcessProjects() {
        this.analytics = new Analytics();
        double total = 1000;
        double numStudents = 10;
        double numQueues = 3;

        double weight = 3000;
        double averageWait = 5.0 / 3.0;

        ProjectFeatures features = new ProjectFeatures(total, numStudents, numQueues);
        Project project = new Project("test", features);
        AnalyticProject test = new AnalyticProject(weight, project, averageWait);

        List<Project> projects = new ArrayList<>();
        projects.add(project);

        List<AnalyticProject> expected = new ArrayList<>();
        expected.add(test);

        boolean useRank = true;

        analytics.processProjects(projects, useRank);

        Assert.assertEquals(expected.get(0).getAverageWaitTime(), this.analytics.getData().get(0).getAverageWaitTime(), 0);
    }

    @Test
    public void testCalculateAverageWaitTime() {
        this.analytics = new Analytics();
        double total = 1000;
        double numStudents = 10;
        double numQueues = 3;
        ProjectFeatures features = new ProjectFeatures(total, numStudents, numQueues);

        Project project = new Project("test", features);
        // Set up the project with test data

        double averageWaitTime = analytics.calculateAverageWaitTime(project);
        double expectedAverage = total / 60.0 / numStudents;

        Assert.assertEquals(expectedAverage, averageWaitTime, 0);
    }

    @Test
    public void testCalculateWeight() {
        this.analytics = new Analytics();
        double total = 1000;
        double numStudents = 10;
        double numQueues = 3;
        ProjectFeatures features = new ProjectFeatures(total, numStudents, numQueues);

        Project project = new Project("test", features);
        // Set up the project with test data

        double weight = analytics.calculateWeight(project);

        double testWeight = 0.0;
        testWeight += features.numOfStudents() * 1.0;
        testWeight += features.totalTime() * 0.8;
        testWeight += features.numOfQueues() * -0.5;

        Assert.assertEquals(testWeight, weight, 0);
    }

}