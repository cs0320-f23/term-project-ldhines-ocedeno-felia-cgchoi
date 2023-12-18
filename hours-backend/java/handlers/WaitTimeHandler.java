package handlers;

import com.squareup.moshi.JsonAdapter;
import com.squareup.moshi.Moshi;
import com.squareup.moshi.Types;
import data.WaitTimeDatasource;
import spark.Request;
import spark.Response;
import spark.Route;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.Map;

public class WaitTimeHandler implements Route {

    private WaitTimeDatasource data;

    public WaitTimeHandler(WaitTimeDatasource myData) {
        this.data = myData;
    }

    @Override
    public Object handle(Request request, Response response) throws Exception {
    
        String seconds = request.queryParams("seconds");
        String numStudents = request.queryParams("num");

        Map<String, Object> responseMap = new HashMap<>();
        Moshi moshi = new Moshi.Builder().build();
        Type mapStringObject = Types.newParameterizedType(Map.class, String.class, Object.class);
        JsonAdapter<Map<String, Object>> adapter = moshi.adapter(mapStringObject);

        try {
            responseMap.put("type", "success");
            responseMap.put("data", this.data.getData(seconds, numStudents));
        } catch (Exception e) {
            responseMap.put("type", "error");
            responseMap.put("system message", e.getMessage());
            responseMap.put("message", "data analysis failure, please examine request");
        }

        return adapter.toJson(responseMap);
    }
}
