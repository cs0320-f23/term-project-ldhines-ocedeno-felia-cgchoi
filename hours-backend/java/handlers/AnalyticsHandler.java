package handlers;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import data.AnalyticProject;
import data.Analytics;
import data.AnalyticsDatasource;
import data.Project;
import spark.Request;
import spark.Response;
import spark.Route;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class AnalyticsHandler implements Route {

    private Analytics dataWrapper;

    public AnalyticsHandler(Analytics dataWrapper) {
        this.dataWrapper = dataWrapper;

    }


    @Override
    public Object handle(Request request, Response response) throws Exception {
        Moshi moshi = new Moshi.Builder().build();
        Type projectsListType = Types.newParameterizedType(List.class, Project.class);
        JsonAdapter<List<Project>> projectsListAdapter = moshi.adapter(projectsListType);

        Map<String, Object> responseMap = new LinkedHashMap<>();
        Boolean sorted = Boolean.parseBoolean(request.queryParams("sorted"));
        try {
            List<Project> projects = projectsListAdapter.fromJson(request.body());
            if (projects == null) {
                throw new IllegalArgumentException("Invalid JSON format for projects");
            }
            else{
                this.dataWrapper.processProjects(projects,sorted);
                List<AnalyticProject> analyticProjects = this.dataWrapper.getData();
                responseMap.put("type", "success");
                responseMap.put("data", analyticProjects);
            }
        } catch (Exception e) {
            responseMap.put("type", "error");
            responseMap.put("system message", e.getMessage());
            responseMap.put("message", "Data processing failure, please examine the request");
        }
        response.type("application/json");
        return moshi.adapter(Map.class).toJson(responseMap);
    }
}

