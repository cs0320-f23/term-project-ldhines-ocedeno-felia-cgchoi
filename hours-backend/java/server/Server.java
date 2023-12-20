package server;

import static spark.Spark.after;

import data.Analytics;
import data.mocks.WaitTimeMock;
import handlers.AnalyticsHandler;
import handlers.WaitTimeHandler;
import spark.Spark;

import java.io.IOException;

/**
 *The server.Server class handles the logic of using different endpoints to produced desired results,
 * such as loading a file, viewing its contents, or searching it. It contains an instance
 * of CsvData so that the necessary information (a parsed filed to be searched or viewed)
 * can be passed along these classes.
 *
 */

public class Server {

    /**
     * main employs all of the logic regarding the endpoints. A local host is created from
     * a port that is passed into Spark. Then, an instane of CsvData is created to be passed
     * between the handlers. Each handler is instantiated alongside its necessary endpoint.
     * All the csv handlers use the sharedState as an argument, while BroadbandHandler specifically
     * uses an ACSSource instance for later API functionality.
     *
     * @param args
     * @throws DatasourceException
     * @throws IOException
     */
    public static void main(String[] args) throws DatasourceException, IOException {
        int port = 8485;
        Spark.port(port);



        //Acess is given to all to avoid issues with accessing the server.
        after((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Methods", "*");
        });


        Spark.post("/analytics", new AnalyticsHandler(new Analytics()));
        Spark.get("/waittime", new WaitTimeHandler(new WaitTimeMock()));




        Spark.init();
        Spark.awaitInitialization();

        System.out.println("server.Server started at http://localhost:" + port);
    }
}