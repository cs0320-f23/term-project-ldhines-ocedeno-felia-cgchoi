package data;

import java.util.ArrayList;
import java.util.List;

public class Analytics {

   private  List<AnalyticProject> projects;
    public Analytics() {

    }

    public void processProjects(List<Project> projects, boolean useRank){
        this.projects = new ArrayList<>();
      for (Project project: projects){
          double averageWaitTime = this.calculateAverageWaitTime(project);
          double weight = this.calculateWeight(project);

          AnalyticProject newProject = new AnalyticProject(weight,project,averageWaitTime);
          this.projects.add(newProject);
      }
      if (useRank){
          this.sortProjectsByWeight(this.projects);
      }
    }




    public double calculateAverageWaitTime(Project project){
        double totalTime = project.features().totalTime() / 60; //convert to minutes
        double totalSignups = project.features().numOfStudents();
        return totalTime / totalSignups;
    }

    private void sortProjectsByWeight(List<AnalyticProject> projects) {
        projects.sort((p1, p2) -> Double.compare(p2.getWeight(), p1.getWeight()));
    }

    public double calculateWeight(Project project){
            //Project A and Project B have the same amount of signups, but Project A has more queues so A needs more attention
            ProjectFeatures features = project.features();

            double studentWeight = 1.0; // Higher weight, more signups -> project needs more attention
            double queueWeight = -0.5;  // Negative weight, more queues means project has more attention already
            double timeWeight = 0.8;    // Positive weight, similar to signups but less significant

            double weight = 0.0;
            weight += features.numOfStudents() * studentWeight;
            weight += features.totalTime() * timeWeight;
            weight += features.numOfQueues() * queueWeight; // Note the addition because of negative weight

            return weight;
    }

    public List<AnalyticProject> getData(){
        return new ArrayList<>(this.projects);

    }


}
