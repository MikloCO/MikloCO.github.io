using System;
/**************************************************************************************************
                        A3 Project, A3.4: Longest Uncrossed Knight’s Path
                        Artifical Intelligence for Game Programming 1, 7.5HP
                        Uppsala University
                        Created by Olivia Mikler, olmi1239

**************************************************************************************************/
class Program
{
    //Create M, a 2D array with dimensions 7 x 7 
    private static int[,] M = new int[8, 8];

    //Create coordinates (represents all availible moves on a chessboard) with dimensions7x1 
    private static int[,] coordinates = new int[8, 2];

    //Create our 3D array list0, with dimensions 63 x 7 x 1 
    private static int[,,] list0 = new int[64, 8, 2];

    //Create index K (to use for each table)
    private static int[] K = new int[64];

    //We use our constructor to initalize our arrays
    Program()
    {
        list0.Initialize();
        M.Initialize();
        K.Initialize();
        coordinates.Initialize();
    }

    //This method checks all possible coordinates the unicorn is able to visit.
    private static int[,] coordinates_to_visit(int x, int y)
    {
        // All possible moves from x, y
        //8 x 2 = 16. There are 8 possible moves, and 2 coordinates x, y
        coordinates[0, 0] = x - 2;
        coordinates[0, 1] = y - 1;
        coordinates[1, 0] = x - 2;
        coordinates[1, 1] = y + 1;
        coordinates[2, 0] = x - 1;
        coordinates[2, 1] = y - 2;
        coordinates[3, 0] = x - 1;
        coordinates[3, 1] = y + 2;
        coordinates[4, 0] = x + 1;
        coordinates[4, 1] = y - 2;
        coordinates[5, 0] = x + 1;
        coordinates[5, 1] = y + 2;
        coordinates[6, 0] = x + 2;
        coordinates[6, 1] = y - 1;
        coordinates[7, 0] = x + 2;
        coordinates[7, 1] = y + 1;

        return coordinates;
    }
    static void printArray()
    {
        
        // Print the chess board
        Console.Write("\n--------------------\n");
        Console.Write("- Print chessboard -\n");
        Console.Write("--------------------\n");
        int rowLength2 = M.GetLength(0);
        int colLengt2 = M.GetLength(1);

        for (int i = 0; i < rowLength2; i++)
        {
            for (int j = 0; j < colLengt2; j++)
            {
                Console.Write(M[i, j].ToString() + "\t");
            }
            Console.Write("\n\n");
        }
        // -----------------------------------------------
    }


    //Copy in 2D matrix to 3D matrix at index L
    static void insert_TableWithCoordinatesTo_ThreeDMatrix(int[,,] _3D_matricx, int[,] coordXY, int l)
    {

        for (int row = 0; row < 8; row++)
        {
            for (int column = 0; column < 2; column++)
            {
                _3D_matricx[l, row, column] = coordXY[row, column];
            }
        }
    }
    //This is our method to check if x, y and M are valid coordinates to visit. 
    static bool coord_OK(int xPos, int yPos, int[,] M)
    {
        if (xPos >= 0 && xPos < 8 && yPos >= 0 && yPos < 8)
        {   //if the coordinate has not been visited (square is 0) - it is OK to move here.
            if (M[xPos, yPos] == 0)
            {
                return true;
            }
            //if the coordinate has been visited (square is > 0) - it not OK to move here
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    public static void Main()
    {
        //Let's print the chessboard to see that all is zero-d out.
        printArray();

        //We create our variables l (In our 3D array, which frame are we now? 0-63), x, y, x1, y1
        int l = 0, x = 5, y = 5, x1 = 0, y1 = 0;


        //As long as we are not done, our while loop will have to work...
        bool done = false;


        while (!done)
        {

            insert_TableWithCoordinatesTo_ThreeDMatrix(list0, coordinates_to_visit(x, y), l);

            //Build new table           
            M[x, y] = l + 1;
        l0:
            x1 = list0[l, K[l], 0];
            y1 = list0[l, K[l], 1];

            //we send our x1, y1, M for a check if these coordinates are OK to visit.
            if (coord_OK(x1, y1, M))
            {
                //The coordinates are OK so we assign x = x1 and y = y1. Then we continue indexing through our 3D array. 
                x = x1; y = y1;
                l++;
                if (l > 62) { printArray(); done = true; }
            }
            else //if the coordinates are not OK...
            {
            l1:
                //We are sent here if index L is lower than 6.
                if (K[l] < 7)
                {
                    //We increase index L 
                    K[l]++;
                    //We are sent up top to check if the incremented index has proveded us with a value that is valid to move to. 
                    goto l0;
                }
                else
                { //if index L is 7...
                    //We start over, we assign k[L] the value of 0
                    K[l] = 0;
                    //And we decrement our index L, as we do our backtracking. 
                    l--;
                    //We zero out the square we go back to 
                    M[list0[l, K[l], 0], list0[l, K[l], 1]] = 0;

                    //If there is no solution found we break loop and print out the error in our console
                    if (l == -1) { Console.Write("No solution found"); break; }

                    goto l1; //We are sent to l1
                }

            } //end while
        }
    }
}

